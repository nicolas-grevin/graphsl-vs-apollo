#!/bin/bash

set -e

mongo --username ${MONGO_INITDB_ROOT_USERNAME} --password ${MONGO_INITDB_ROOT_PASSWORD} --authenticationDatabase admin <<EOF
    use ${MONGO_GRAPHQL_DATABASE};

    db.createUser({
        user: '${MONGO_GRAPHQL_USER}',
        pwd: '${MONGO_GRAPHQL_PASSWORD}',
        roles: [
            { role: 'readWrite', db: '${MONGO_GRAPHQL_DATABASE}' },
        ]
    });

    db.admin.insert({ "init": "true" });

    use ${MONGO_APOLLO_DATABASE};

    db.createUser({
        user: '${MONGO_APOLLO_USER}',
        pwd: '${MONGO_APOLLO_PASSWORD}',
        roles: [
            { role: 'readWrite', db: '${MONGO_APOLLO_DATABASE}' },
        ]
    });


    db.admin.insert({ "init": "true" });
EOF
