# Запуск докер контейнера с Laravel
1) **docker-compose up -d**
2) **docker ps** смотрим имя контейнеров нам нужен php_fpm_lv
3) **docker exec -it php_fpm_lv bash** заходим внутрь контейнера
4) **php artisan migrate** выполняем миграции внутри контейнера
5) на http://localhost:7000/ работает приложения

менеджмент статей http://localhost:7000/#/dashboard

