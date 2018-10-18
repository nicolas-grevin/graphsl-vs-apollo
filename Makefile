APP_NAME?=graphsl-vs-apollo
APP_DIR?=graphql-vs-apollo
APP_DIR_GRAPHQL?=GRAPHQL
APP_DIR_APOLLO?=APOLLO
DOCKER_IMAGE_NAME?=node
DOCKER_IMAGE_VERSION?=9-alpine
PORT_EXPOSE_GRAPHQL?=4441
PORT_DOCKER_GRAPHQL?=8080
PORT_EXPOSE_APOLLO?=4442
PORT_DOCKER_APOLLO?=8080
NODE_ENV?=development
START_CMD_GRAPHQL="cd /${APP_DIR}/${APP_DIR_GRAPHQL} && yarn && yarn serve"
START_CMD_APOLLO="cd /${APP_DIR}/${APP_DIR_APOLLO} && yarn && yarn serve"

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

start: ## Run container: default dev
	$(info --> Run containers: ${NODE_ENV})
	@docker run \
		--rm \
		--detach \
		--user node \
		--name "/${APP_NAME}" \
		--workdir "/${APP_DIR}" \
		--env "NODE_ENV=${NODE_ENV}" \
		--volume "${CURDIR}/${APP_DIR_GRAPHQL}:/${APP_DIR}/${APP_DIR_GRAPHQL}" \
		--volume "${CURDIR}/${APP_DIR_APOLLO}:/${APP_DIR}/${APP_DIR_APOLLO}" \
		--publish ${PORT_EXPOSE_GRAPHQL}:${PORT_DOCKER_GRAPHQL} \
		--publish ${PORT_EXPOSE_APOLLO}:${PORT_DOCKER_APOLLO} \
		${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_VERSION} \
		sh -c "${START_CMD_GRAPHQL} && ${START_CMD_APOLLO}"

stop: ## Stop containers
	$(info --> Stop container)
	@docker stop ${APP_NAME}

destroy: ## Stop and remove containers
	$(info --> Stop and remove a running container)
	@docker rm --force --volumes ${APP_NAME}

logs: ## Display logs
	$(info --> Display log)
	@docker logs --follow ${APP_NAME}

sh: ## Run bash inside container
	$(info --> Run bash inside the container app)
	@docker exec --interactive --tty ${APP_NAME} sh

ifeq (npm,$(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif

npm: ## Run npm inside container
	$(info --> Run npm inside the container app)
	@docker exec ${APP_NAME} npm $(RUN_ARGS)

ifeq (yarn,$(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif

yarn: ## Run yarn inside container
	$(info --> Run npm inside the container app)
	@docker exec ${APP_NAME} yarn $(RUN_ARGS)

ifeq (exec,$(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif

exec: ## Execute command inside container
	$(info --> Execute command inside container)
	@docker exec ${APP_NAME} sh -c "$(RUN_ARGS)"

ifeq (interact,$(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif

interact: ## Execute interactive command inside container
	$(info --> Execute interactive command inside container)
	@docker exec --interactive --tty ${APP_NAME} sh -c "$(RUN_ARGS)"

ifeq (run,$(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif

run: ## Run command inside this projet
	$(info --> Run command inside this projet)
	@docker run \
		--rm \
		--tty \
		--user node \
		--interactive \
		--name ${APP_NAME} \
		--workdir "/${APP_DIR}" \
		--env "NODE_ENV=${NODE_ENV}" \
		--volume "${CURDIR}/${APP_DIR_GRAPHQL}:/${APP_DIR}/${APP_DIR_GRAPHQL}" \
		--volume "${CURDIR}/${APP_DIR_APOLLO}:/${APP_DIR}/${APP_DIR_APOLLO}" \
		--publish ${PORT_EXPOSE_GRAPHQL}:${PORT_DOCKER_GRAPHQL} \
		--publish ${PORT_EXPOSE_APOLLO}:${PORT_DOCKER_APOLLO} \
		${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_VERSION} \
		sh -c "$(RUN_ARGS)"
