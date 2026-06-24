# UNIX / MacOS commands cheatsheet

Одна команда — одна строка. Краткое описание (RU/EN).

## Навигация / Navigation

-   `pwd` — показать текущий путь / print working directory
-   `cd <dir>` — перейти в директорию / change directory
-   `cd ~` — перейти в домашний каталог / go to home
-   `cd -` — вернуться в предыдущий каталог / go to previous dir
-   `cd ..` — на уровень вверх / one level up
-   `ls` — список файлов / list files
-   `ls -l` — длинный формат с правами/размером / long listing format
-   `ls -a` — включая скрытые (точечные) файлы / include hidden files
-   `ls -lh` — размеры в человекочитаемом виде / human-readable sizes
-   `ls -lt` — сортировка по дате изменения / sort by modification time
-   `tree` — дерево каталогов (нужен `brew install tree`) / directory tree

## Файлы и каталоги / Files & directories

-   `touch <file>` — создать пустой файл или обновить mtime / create or update
    timestamp
-   `mkdir <dir>` — создать каталог / make directory
-   `mkdir -p a/b/c` — создать вложенные каталоги / nested dirs in one shot
-   `cp <src> <dst>` — копировать файл / copy file
-   `cp -r <src> <dst>` — рекурсивно копировать каталог / copy recursively
-   `mv <src> <dst>` — переместить или переименовать / move or rename
-   `rm <file>` — удалить файл / remove file
-   `rm -r <dir>` — удалить каталог рекурсивно / remove dir recursively
-   `rm -rf <dir>` — то же без подтверждений (ОПАСНО) / force, no prompt
    (DANGEROUS)
-   `rmdir <dir>` — удалить пустой каталог / remove empty directory
-   `ln -s <target> <link>` — символическая ссылка / symbolic link
-   `stat <file>` — метаданные файла / file metadata
-   `file <file>` — определить тип файла / detect file type
-   `du -sh <dir>` — размер каталога / disk usage summary
-   `df -h` — свободное место на дисках / disk free space

## Просмотр содержимого / Viewing content

-   `cat <file>` — вывести файл целиком / print file
-   `less <file>` — постраничный просмотр (q — выход) / paged viewer
-   `more <file>` — простой пейджер / simple pager
-   `head <file>` — первые 10 строк / first 10 lines
-   `head -n 20 <file>` — первые N строк / first N lines
-   `tail <file>` — последние 10 строк / last 10 lines
-   `tail -n 50 <file>` — последние N строк / last N lines
-   `tail -f <file>` — следить за обновлениями в реальном времени / follow live
-   `wc <file>` — счёт строк/слов/байт / word, line, byte count
-   `wc -l <file>` — только строки / line count only
-   `nl <file>` — пронумеровать строки / number lines

## Поиск / Search

-   `find <dir> -name "*.js"` — найти файлы по имени / find by name
-   `find <dir> -type d` — только каталоги / directories only
-   `find <dir> -type f -size +10M` — файлы больше 10 МБ / files >10MB
-   `grep "pattern" <file>` — поиск строки в файле / search text in file
-   `grep -r "pattern" <dir>` — рекурсивный поиск / recursive search
-   `grep -i "pattern"` — без учёта регистра / case-insensitive
-   `grep -n "pattern"` — с номерами строк / show line numbers
-   `grep -v "pattern"` — инверсия (что НЕ совпадает) / invert match
-   `which <cmd>` — путь к исполняемому файлу / show path of binary
-   `whereis <cmd>` — путь к бинарю/исходнику/man / locate binary, source,
    manual
-   `locate <name>` — быстрый поиск по индексу (нужен `brew install findutils`)
-   `mdfind "query"` — Spotlight-поиск (только macOS) / Spotlight search

## Работа с текстом / Text processing

-   `sort <file>` — отсортировать строки / sort lines
-   `sort -r` — обратный порядок / reverse order
-   `sort -u` — уникальные строки / unique lines
-   `sort -n` — числовая сортировка / numeric sort
-   `uniq <file>` — убрать соседние дубликаты (часто после sort) / remove
    adjacent duplicates
-   `uniq -c` — посчитать повторы / count occurrences
-   `cut -d',' -f1 <file>` — извлечь столбец / extract column by delimiter
-   `tr 'a-z' 'A-Z'` — заменить символы (через пайп) / translate chars
-   `tr -d ' '` — удалить символы / delete chars
-   `sed 's/foo/bar/g' <file>` — потоковая замена / stream replace
-   `sed -i '' 's/foo/bar/g' <file>` — заменить на месте (macOS-синтаксис) /
    in-place edit
-   `awk '{print $1}' <file>` — извлечь 1-й столбец / print first column
-   `awk -F',' '{print $2}'` — со своим разделителем / custom separator
-   `diff <a> <b>` — различия двух файлов / file diff
-   `comm <a> <b>` — общие/уникальные строки отсортированных файлов / common
    lines
-   `rev <file>` — перевернуть строки / reverse each line
-   `paste a b` — склеить файлы по столбцам / merge by columns

## Пайпы и редиректы / Pipes & redirects

-   `cmd > file` — записать stdout в файл (перезапись) / write stdout
-   `cmd >> file` — дописать в конец / append
-   `cmd 2> file` — записать stderr / write stderr
-   `cmd &> file` — записать stdout и stderr / both streams
-   `cmd1 | cmd2` — передать вывод следующей команде / pipe stdout
-   `cmd < file` — взять stdin из файла / read stdin from file
-   `tee <file>` — раздвоить вывод (на экран и в файл) / duplicate output
-   `xargs <cmd>` — построить аргументы из stdin / build args from stdin

## Права и владелец / Permissions & ownership

-   `chmod 755 <file>` — права rwxr-xr-x / set permission bits
-   `chmod +x <file>` — сделать исполняемым / make executable
-   `chown user:group <file>` — сменить владельца / change owner
-   `umask` — маска прав по умолчанию / default permission mask
-   `sudo <cmd>` — выполнить от root / run as root

## Процессы / Processes

-   `ps` — мои процессы / list user processes
-   `ps aux` — все процессы (BSD-стиль, macOS) / all processes
-   `top` — активный монитор процессов / live process monitor
-   `htop` — улучшенный top (нужен `brew install htop`)
-   `kill <pid>` — отправить SIGTERM / terminate process
-   `kill -9 <pid>` — SIGKILL, форс / force kill
-   `killall <name>` — убить по имени / kill by name
-   `jobs` — фоновые задачи текущего шелла / shell background jobs
-   `bg` / `fg` — продолжить в фоне / на переднем плане
-   `nohup <cmd> &` — запустить независимо от шелла / detach from shell
-   `lsof -i :3000` — кто слушает порт 3000 / list process on port
-   `pgrep <name>` — найти PID по имени / find PID by name

## Сеть / Network

-   `ping <host>` — проверка доступности / ping host
-   `curl <url>` — HTTP-запрос / HTTP request
-   `curl -O <url>` — скачать файл / download file
-   `curl -X POST -d 'data' <url>` — POST-запрос / POST request
-   `wget <url>` — скачать файл (нужен `brew install wget`)
-   `ssh user@host` — SSH-подключение / remote shell
-   `scp <src> user@host:<dst>` — копирование по SSH / secure copy
-   `rsync -avz <src> <dst>` — синхронизация / fast sync with deltas
-   `ifconfig` — сетевые интерфейсы (macOS) / network interfaces
-   `ipconfig getifaddr en0` — IP Wi-Fi (macOS) / Wi-Fi IP
-   `netstat -an` — сетевые соединения / network connections
-   `dig <domain>` — DNS-запрос / DNS query
-   `nslookup <domain>` — разрешить имя / name lookup
-   `host <domain>` — DNS-резолв / DNS resolver
-   `traceroute <host>` — путь пакета / packet path

## Архивы / Archives

-   `tar -czf out.tar.gz <dir>` — создать gzip-архив / create gzip archive
-   `tar -xzf in.tar.gz` — распаковать gzip / extract gzip
-   `tar -tzf in.tar.gz` — список содержимого / list contents
-   `zip -r out.zip <dir>` — создать zip / create zip
-   `unzip in.zip` — распаковать zip / extract zip
-   `gzip <file>` / `gunzip <file.gz>` — сжать / разжать
-   `bzip2 <file>` / `bunzip2 <file.bz2>` — другой алгоритм / alt compression

## Информация о системе / System info

-   `uname -a` — версия ядра/арх / kernel + arch
-   `sw_vers` — версия macOS / macOS version
-   `whoami` — текущий пользователь / current user
-   `id` — UID/GID + группы / user IDs and groups
-   `uptime` — аптайм + load average
-   `date` — текущая дата и время / current date
-   `cal` — календарь месяца / month calendar
-   `history` — история команд шелла / shell history
-   `env` — переменные окружения / environment variables
-   `echo $VAR` — значение переменной / variable value
-   `printenv VAR` — то же, что `echo $VAR` / same
-   `export VAR=value` — экспорт переменной / export env var
-   `man <cmd>` — мануал команды / manual page
-   `tldr <cmd>` — короткие примеры (нужен `brew install tldr`)
-   `<cmd> --help` — встроенная справка / built-in help

## Управление пакетами macOS / Package management (macOS)

-   `brew install <pkg>` — установить пакет / install
-   `brew uninstall <pkg>` — удалить / uninstall
-   `brew update` — обновить список / refresh formulae
-   `brew upgrade` — обновить установленные / upgrade installed
-   `brew list` — список установленных / installed packages
-   `brew search <name>` — поиск формул / search formulae
-   `brew doctor` — диагностика / health check
-   `brew services list` — фоновые сервисы / background services

## Шелл-удобства / Shell shortcuts

-   `clear` или `Ctrl+L` — очистить экран / clear screen
-   `Ctrl+C` — прервать команду / interrupt
-   `Ctrl+D` — EOF / выход из шелла / EOF or logout
-   `Ctrl+Z` — приостановить процесс (потом `fg`) / suspend
-   `Ctrl+R` — поиск по истории / reverse history search
-   `Ctrl+A` / `Ctrl+E` — в начало / в конец строки / line start/end
-   `!!` — повторить предыдущую команду / repeat last command
-   `!$` — последний аргумент предыдущей команды / last arg of prev cmd
-   `alias ll='ls -la'` — алиас команды / command alias

## macOS-специфика / macOS-only

-   `open <file>` — открыть в дефолтном приложении / open with default app
-   `open .` — открыть текущий каталог в Finder / open in Finder
-   `open -a Safari <url>` — открыть в приложении / open in app
-   `pbcopy` / `pbpaste` — буфер обмена (через пайп) / clipboard
-   `say "hello"` — синтез речи / text-to-speech
-   `caffeinate` — не давать машине заснуть / prevent sleep
-   `diskutil list` — список дисков / list disks
-   `system_profiler SPHardwareDataType` — инфо об оборудовании / hardware info
-   `softwareupdate -l` — доступные обновления macOS / list updates
-   `defaults read <domain>` — чтение настроек plist / read prefs
-   `xattr -d com.apple.quarantine <file>` — снять карантин (.dmg/.app) / remove
    quarantine
-   `launchctl list` — список launchd-сервисов / launchd services
