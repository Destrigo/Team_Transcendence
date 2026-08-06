up:
	docker compose up -d

down:
	docker compose down

restart:
	docker compose restart

rebuild:
	docker compose up -d --build 

logs:
	docker compose logs -f

status:
	docker compose ps

clean:
	docker compose down -v --remove-orphans

logs-back:
	docker compose logs -f backend

logs-front:
	docker compose logs -f frontend

logs-db:
	docker compose logs -f db

logs-proxy:
	docker compose logs -f proxy

bash-back:
	docker compose exec backend sh

bash-front:
	docker compose exec frontend sh

bash-db:
	docker compose exec db sh

psql:
	docker compose exec db psql -U $${DB_USER:-papertrade} -d $${DB_NAME:-papertrade}

prune:
	docker system prune -a --volumes -f

delete:
	docker stop $$(docker ps -qa) 2>/dev/null; \
	docker rm -f $$(docker ps -qa) 2>/dev/null; \
	docker rmi -f $$(docker images -qa) 2>/dev/null; \
	docker volume rm $$(docker volume ls -q) 2>/dev/null; \
	docker network rm $$(docker network ls -q) 2>/dev/null

.PHONY: up down restart rebuild logs status clean logs-back logs-front logs-db logs-proxy bash-back bash-front bash-db psql prune delete