#!/usr/bin/env bash

set -e

#!/bin/bash

set -e

mongo --username ${MONGO_INITDB_ROOT_USERNAME} --password ${MONGO_INITDB_ROOT_PASSWORD} --authenticationDatabase admin <<EOF
    use ${MONGO_DATABASE};

    db.createUser({
        user: '${MONGO_INITDB_ROOT_USERNAME}',
        pwd: '${MONGO_INITDB_ROOT_PASSWORD}',
        roles: [
            { role: 'readWrite', db: '${MONGO_DATABASE}' },
        ]
    });
EOF

