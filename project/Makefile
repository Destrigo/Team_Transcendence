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

backend:
	docker compose logs -f backend

frontend:
	docker compose logs -f frontend

db:
	docker compose logs -f db

bash-back:
	docker compose exec backend sh

bash-front:
	docker compose exec frontend sh

psql:
	docker compose exec db psql -U $${DB_USER:-papertrade} -d $${DB_NAME:-papertrade}

bash-db:
	docker compose exec db sh

.PHONY: up down restart rebuild logs status clean backend frontend db bash-back bash-front psql