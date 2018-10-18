include .env

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

start-pg: ## Start postgreSQL
	$(info --> Start postgreSQL)
	@docker run \
		--rm \
    	--detach \
		--env-file=./.env \
    	--name ${APP_NAME}-pgsql \
		--volume "${CURDIR}/.data:/var/lib/postgresql/data" \
		--publish ${POSTGRES_PORT}:${POSTGRES_PORT} \
		postgres:10-alpine

stop-pg: ## Stop postgreSQL
	$(info --> Stop postgreSQL)
	@docker stop ${APP_NAME}-pgsql

start: ## Run container: default dev
	$(info --> Run containers: ${NODE_ENV})
	@if [ ! "$(docker ps -q -f name=${APP_NAME}-pgsql)" ]; then \
		@make start-pg \
	fi
	@docker run \
		--rm \
		--detach \
		--user node \
		--env-file=./.env \
		--workdir "/${APP_DIR}" \
		--name "${APP_NAME}-node" \
		--link ${APP_NAME}-pgsql:postgres \
		--volume "${CURDIR}/${APP_DIR_GRAPHQL}:/${APP_DIR}/${APP_DIR_GRAPHQL}" \
		--volume "${CURDIR}/${APP_DIR_APOLLO}:/${APP_DIR}/${APP_DIR_APOLLO}" \
		--publish ${PORT_EXPOSE_GRAPHQL}:${PORT_DOCKER_GRAPHQL} \
		--publish ${PORT_EXPOSE_APOLLO}:${PORT_DOCKER_APOLLO} \
		${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_VERSION} \
		sh -c "${START_CMD_GRAPHQL} && ${START_CMD_APOLLO}"

stop: ## Stop containers
	$(info --> Stop container)
	@docker stop ${APP_NAME}-node

destroy: ## Stop and remove containers
	$(info --> Stop and remove a running container)
	@docker rm --force --volumes ${APP_NAME}-node

logs: ## Display logs
	$(info --> Display log)
	@docker logs --follow ${APP_NAME}-node

sh: ## Run bash inside container
	$(info --> Run bash inside the container app)
	@docker exec --interactive --tty ${APP_NAME}-node sh

ifeq (npm,$(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif

npm: ## Run npm inside container
	$(info --> Run npm inside the container app)
	@docker exec ${APP_NAME}-node npm $(RUN_ARGS)

ifeq (yarn,$(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif

yarn: ## Run yarn inside container
	$(info --> Run npm inside the container app)
	@docker exec ${APP_NAME}-node yarn $(RUN_ARGS)

ifeq (exec,$(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif

exec: ## Execute command inside container
	$(info --> Execute command inside container)
	@docker exec ${APP_NAME}-node sh -c "$(RUN_ARGS)"

ifeq (interact,$(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif

interact: ## Execute interactive command inside container
	$(info --> Execute interactive command inside container)
	@docker exec --interactive --tty ${APP_NAME}-node sh -c "$(RUN_ARGS)"

ifeq (run,$(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif

run: ## Run command inside this projet
	$(info --> Run command inside this projet)
	@[ "$(docker ps -a | grep "${APP_NAME}-pgsql")" ] && echo 'here'
	@docker run \
		--rm \
		--tty \
		--user node \
		--interactive \
		--env-file=./.env \
		--workdir "/${APP_DIR}" \
		--name "${APP_NAME}-node" \
		--link ${APP_NAME}-pgsql:postgres \
		--volume "${CURDIR}/${APP_DIR_GRAPHQL}:/${APP_DIR}/${APP_DIR_GRAPHQL}" \
		--volume "${CURDIR}/${APP_DIR_APOLLO}:/${APP_DIR}/${APP_DIR_APOLLO}" \
		--publish ${PORT_EXPOSE_GRAPHQL}:${PORT_DOCKER_GRAPHQL} \
		--publish ${PORT_EXPOSE_APOLLO}:${PORT_DOCKER_APOLLO} \
		${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_VERSION} \
		sh -c "$(RUN_ARGS)"
