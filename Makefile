.DEFAULT_GOAL := help

# Environment variables used by commands called from make (cannot be make variables).
export LC_ALL=en_US.UTF-8

## General

.PHONY: help
help: ## Help command
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n"} /^[$$()% a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-25s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

## SETUP

.PHONY: build ## build the container
build:
	docker-compose up --build -d

.PHONY: dev ## create container and run in dev mode
dev:
	docker-compose -f docker-compose.yaml up --build

.PHONY: prod ## create container and run in prod mode
prod:
	docker-compose -f docker-compose-prod.yaml up --build


## DOCKER

.PHONY: clear-docker ## remove all containers, images, volumes and networks
clear-docker:
	docker-compose down
	docker system prune -a --volumes -f

