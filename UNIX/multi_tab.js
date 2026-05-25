const fs = require('fs')
const { Console } = require('console')

function quadTab() {
    const rows = {}
    for (let int = 1; int <= 10; int++) {
        rows[int] = {}
        for (let inc = 1; inc <= 10; inc++) {
            let i = int
            let j = inc
            rows[i][j] = i * j
        }
    }
    // console.table(rows)
    const out = fs.createWriteStream('multiplication_table.txt')
    const fileLogger = new Console({ stdout: out })
    fileLogger.table(rows)
    out.end()
}
quadTab()