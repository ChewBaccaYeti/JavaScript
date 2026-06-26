# UNIX / MacOS commands cheatsheet

Одна команда — одна строка. Краткое описание (RU/EN).

## Навигация / Navigation

-   `pwd` — показать текущий путь / print working directory
-   `cd <dir>` — перейти в директорию / change directory
-   `cd ~` — перейти в домашний каталог / go to home
-   `cd -` — вернуться в предыдущий каталог / go to previous dir
-   `cd ..` — на уровень вверх / one level up
-   `pushd <dir>` — перейти и запомнить путь в стеке / push dir to stack
-   `popd` — вернуться по стеку pushd / pop dir from stack
-   `dirs` — показать стек каталогов / show dir stack
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
-   `basename <path>` — последний компонент пути / strip directory
-   `dirname <path>` — каталог из пути / strip filename
-   `realpath <path>` — канонический абсолютный путь / resolve to absolute
-   `readlink <link>` — куда указывает симлинк / target of symlink
-   `mktemp` — создать временный файл / make temp file
-   `mktemp -d` — создать временный каталог / make temp dir
-   `truncate -s 0 <file>` — обнулить размер файла / set file size
-   `du -sh <dir>` — размер каталога / disk usage summary
-   `df -h` — свободное место на дисках / disk free space
-   `mount` — список монтированных ФС / list mounted filesystems
-   `umount <dev>` — размонтировать / unmount filesystem

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
-   `od -c <file>` — октет-дамп с символами / octal dump
-   `xxd <file>` — hex-дамп / hex dump
-   `strings <bin>` — извлечь печатаемые строки из бинарника / printable strings

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
-   `apropos <word>` — поиск по описаниям man-страниц / search man pages
-   `whatis <cmd>` — короткое описание команды из man / short description

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
-   `join -t',' a b` — SQL-style JOIN двух файлов по ключу / relational join
-   `fold -w 80` — перенос длинных строк на ширину / wrap lines
-   `column -t` — выровнять колонки в таблицу / format as columns
-   `expand <file>` — табы заменить на пробелы / tabs to spaces
-   `unexpand <file>` — пробелы заменить на табы / spaces to tabs

## Пайпы и редиректы / Pipes & redirects

-   `cmd > file` — записать stdout в файл (перезапись) / write stdout
-   `cmd >> file` — дописать в конец / append
-   `cmd 2> file` — записать stderr / write stderr
-   `cmd &> file` — записать stdout и stderr / both streams
-   `cmd1 | cmd2` — передать вывод следующей команде / pipe stdout
-   `cmd < file` — взять stdin из файла / read stdin from file
-   `tee <file>` — раздвоить вывод (на экран и в файл) / duplicate output
-   `xargs <cmd>` — построить аргументы из stdin / build args from stdin
-   `mkfifo <name>` — создать именованный канал (FIFO) / create named pipe
-   `<( cmd )` — подстановка процесса как файла (bash/zsh) / process
    substitution
-   `>( cmd )` — запись в процесс как в файл / output process substitution

## Права и владелец / Permissions & ownership

-   `chmod 755 <file>` — права rwxr-xr-x / set permission bits
-   `chmod +x <file>` — сделать исполняемым / make executable
-   `chown user:group <file>` — сменить владельца / change owner
-   `chgrp <group> <file>` — сменить группу / change group
-   `umask` — маска прав по умолчанию / default permission mask
-   `sudo <cmd>` — выполнить от root / run as root
-   `sudo -i` — открыть root-шелл / root login shell
-   `su <user>` — переключиться на другого пользователя / switch user

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
-   `pkill <name>` — убить процессы по имени / kill by name pattern
-   `nice -n 10 <cmd>` — запустить с пониженным приоритетом / launch with
    niceness
-   `renice -n 5 -p <pid>` — изменить приоритет работающего / change priority
-   `time <cmd>` — замерить время выполнения / measure execution time
-   `timeout 30 <cmd>` — убить если дольше N секунд / kill after timeout
-   `sleep 5` — пауза N секунд / pause execution
-   `wait <pid>` — ждать завершения процесса / wait for PID
-   `disown` — отвязать задачу от шелла / detach job from shell
-   `screen` — мульти-сессия терминала / terminal multiplexer (legacy)
-   `tmux` — современный мультиплексор терминала / modern multiplexer
-   `at 14:00` — разовая задача в указанное время / schedule one-shot job
-   `crontab -e` — редактировать cron-задачи / edit cron jobs
-   `crontab -l` — список cron-задач / list cron jobs

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
-   `nc -zv <host> <port>` — проверить TCP-порт / probe port (netcat)
-   `nc -l <port>` — слушать порт / listen on port
-   `whois <domain>` — данные о домене / WHOIS lookup
-   `sftp user@host` — интерактивная передача по SSH / secure FTP over SSH

## Архивы / Archives

-   `tar -czf out.tar.gz <dir>` — создать gzip-архив / create gzip archive
-   `tar -xzf in.tar.gz` — распаковать gzip / extract gzip
-   `tar -tzf in.tar.gz` — список содержимого / list contents
-   `zip -r out.zip <dir>` — создать zip / create zip
-   `unzip in.zip` — распаковать zip / extract zip
-   `gzip <file>` / `gunzip <file.gz>` — сжать / разжать
-   `bzip2 <file>` / `bunzip2 <file.bz2>` — другой алгоритм / alt compression
-   `xz <file>` / `unxz <file.xz>` — высокая степень сжатия / LZMA compression
-   `7z a out.7z <dir>` — создать 7z-архив (нужен `brew install p7zip`)
-   `tar -xf <file>` — авто-определение формата (gzip/bzip2/xz) / auto-detect

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
-   `unalias <name>` — удалить алиас / remove alias
-   `type <cmd>` — это бинарь/функция/алиас / what kind of command
-   `command <cmd>` — вызвать в обход алиасов и функций / bypass aliases
-   `seq 1 10` — последовательность чисел / number sequence
-   `yes hello` — бесконечный поток строк (Ctrl+C — стоп) / infinite output
-   `bc -l` — калькулятор с плавающей точкой / arbitrary-precision calc
-   `expr 2 + 3` — арифметика shell-уровня / shell math
-   `echo $(( 2 + 3 ))` — встроенная арифметика bash/zsh / built-in arithmetic
-   `script <file>` — записать всё, что происходит в терминале / record session

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
-   `mdls <file>` — Spotlight-метаданные файла / Spotlight metadata
-   `dscacheutil -flushcache` — сбросить DNS-кэш (macOS) / flush DNS cache
-   `sysctl -a` — переменные ядра / kernel parameters
-   `pmset -g` — состояние питания / power management status

## Редакторы / Editors

-   `nano <file>` — простой консольный редактор / beginner-friendly editor
-   `vim <file>` или `vi <file>` — мощный модальный редактор / modal editor
-   `emacs <file>` — Emacs / Emacs editor
-   `code <file>` — открыть в VS Code (нужен CLI-shim) / open in VS Code
-   `zed <file>` — открыть в Zed / open in Zed

## Хеширование и крипто / Hashing & crypto

-   `md5 <file>` — MD5-хеш (macOS-вариант) / MD5 hash
-   `shasum <file>` — SHA-1 по умолчанию / SHA-1 hash
-   `shasum -a 256 <file>` — SHA-256 / SHA-256 hash
-   `shasum -a 512 <file>` — SHA-512 / SHA-512 hash
-   `cksum <file>` — CRC-сумма + размер / CRC checksum
-   `base64 <file>` — кодировать в base64 / base64 encode
-   `base64 -D` — декодировать base64 (macOS) / base64 decode
-   `openssl dgst -sha256 <file>` — SHA-256 через OpenSSL / hash via OpenSSL
-   `openssl rand -hex 32` — случайные байты в hex / random bytes
-   `openssl rand -base64 24` — случайный пароль / random password
-   `openssl enc -aes-256-cbc -salt -in <f> -out <f.enc>` — зашифровать файл /
    encrypt file
-   `openssl enc -d -aes-256-cbc -in <f.enc> -out <f>` — расшифровать / decrypt
-   `openssl genrsa -out key.pem 4096` — RSA-ключ / generate RSA key
-   `openssl req -new -x509 -key key.pem -out cert.pem` — самоподписанный
    сертификат / self-signed cert
-   `openssl s_client -connect host:443` — проверить TLS-handshake / test TLS
-   `gpg -c <file>` — симметричное шифрование с паролем / symmetric encrypt
-   `gpg <file.gpg>` — расшифровать / decrypt
-   `gpg --gen-key` — сгенерировать пару ключей / generate keypair
-   `gpg --list-keys` — список ключей / list keys
-   `gpg --export -a <id>` — экспорт публичного ключа (ASCII) / export pub key
-   `gpg --import <key>` — импорт ключа / import key
-   `ssh-keygen -t ed25519` — сгенерировать SSH-ключ (ed25519) / generate SSH
    key
-   `ssh-keygen -t rsa -b 4096` — RSA-ключ 4096 бит / generate RSA SSH key
-   `ssh-copy-id user@host` — установить публичный ключ на сервер / install pub
    key
-   `ssh-add ~/.ssh/id_ed25519` — добавить ключ в ssh-agent / load key into
    agent
-   `security` — Keychain CLI (macOS) / macOS Keychain CLI
-   `security find-generic-password -s <name> -w` — достать пароль из Keychain /
    fetch password

# <!--

УСТАРЕВШИЕ / DEPRECATED / небезопасные Команды ниже всё ещё могут быть
установлены, но небезопасны или вытеснены современными аналогами. Использовать
только в legacy-системах или из любопытства.
======================================================== -->

## Устаревшее и небезопасное / Deprecated & insecure

-   `crypt` — древнее DES-шифрование, криптографически сломано → используй
    `openssl enc` / `gpg`
-   `telnet <host>` — нешифрованный удалённый шелл → используй `ssh`
-   `ftp <host>` — нешифрованная передача файлов → используй `sftp` / `scp` /
    `rsync`
-   `rsh <host>` — нешифрованный remote shell (BSD) → `ssh`
-   `rcp <src> <dst>` — нешифрованное копирование (BSD) → `scp`
-   `rlogin <host>` — нешифрованный remote login (BSD) → `ssh`
-   `finger <user>` — инфо о пользователях, по умолчанию выключено / disabled by
    default
-   `talk <user>` — интерактивный текстовый чат между пользователями / legacy
    chat
-   `write <user>` — отправить сообщение на терминал другого пользователя /
    legacy IPC
-   `wall "msg"` — broadcast всем залогиненным / write to all
-   `mesg y|n` — разрешить/запретить write-сообщения / toggle write access
-   `uucp` — Unix-to-Unix copy, протокол доинтернет-эпохи / pre-Internet copy
-   `dump` / `restore` — древние ФС-бэкапы → `tar`/`rsync`/`Time Machine`
-   `arp -a` — таблица ARP (macOS ещё актуально, на Linux → `ip neigh`)
-   `route` — таблица маршрутов (на Linux → `ip route`)
-   `netstat` — на Linux считается legacy → `ss`; на macOS пока актуален
-   `ifconfig` — на Linux считается legacy → `ip addr`; на macOS пока актуален
-   `pico` — предшественник `nano`, в macOS обычно симлинк на `nano`
-   `which -a` — на Linux частично заменён `command -v` / `type -a`
