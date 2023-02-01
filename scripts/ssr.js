const shell = require('shelljs')

const pagesFiles = [
    'pages/index_ssr.js',
    'pages/index_csr.js',
    'pages/index_ssg.js'
]

shell.rm(pagesFiles)

shell.cp('pagesTemplate/index_ssr.js', 'pages')

shell.exec('next build')
