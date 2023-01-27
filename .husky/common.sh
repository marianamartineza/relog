command_exists () {
  command -v "$1" >/dev/null 2>&1
}

# Workaround for Windows 10, Git Bash and Yarn
if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi

#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
. "$(dirname -- "$0")/common.sh"

yarn ...