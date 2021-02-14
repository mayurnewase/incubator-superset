# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
"""migrate force directed chart to echart

Revision ID: 7ccce162535d
Revises: 070c043f2fdb
Create Date: 2021-02-14 11:17:58.935066

"""
import json

import sqlalchemy as sa
from alembic import op
from sqlalchemy import Column, Integer, or_, String, Text
from sqlalchemy.ext.declarative import declarative_base

from superset import db

# revision identifiers, used by Alembic.
revision = "7ccce162535d"
down_revision = "070c043f2fdb"


Base = declarative_base()


class Slice(Base):
    __tablename__ = "slices"
    id = Column(Integer, primary_key=True)
    viz_type = Column(String(250))
    params = Column(Text)


def upgrade():
    bind = op.get_bind()
    session = db.Session(bind=bind)

    for slc in session.query(Slice).filter(Slice.viz_type.like("directed_force")):
        params = json.loads(slc.params)

        groupby = params.get("groupby", [])
        if groupby:
            params["source"] = groupby[0]
            params["target"] = groupby[1]
            params["edgeLength"] = 400
            params["repulsion"] = 1000
            params["layout"] = "force"
            del params["groupby"]
            del params["charge"]
            del params["collapsed_fieldsets"]
            del params["link_length"]
            slc.params = json.dumps(params)

        slc.viz_type = "graph_chart"
        session.merge(slc)
        session.commit()
    session.close()


def downgrade():
    bind = op.get_bind()
    session = db.Session(bind=bind)

    for slc in session.query(Slice).filter(Slice.viz_type.like("directed_force")):
        params = json.loads(slc.params)
        source = params.get("source", "")
        target = params.get("target", "")
        if source and target:
            params["groupby"] = [source, target]
            del params["source"]
            del params["target"]
            del params["edgeLength"]
            del params["repulsion"]
            del params["layout"]
            params["charge"] = "-500"
            params["collapsed_fieldsets"] = ""
            params["link_length"] = "200"
            slc.params = json.dumps(params)

        slc.viz_type = "directed_force"
        session.merge(slc)
        session.commit()
    session.close()
