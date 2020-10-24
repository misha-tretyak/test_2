const cluster = require('cluster');
const os = require('os');
let cpuCount = os.cpus().length;

if (cluster.isMaster) {
for (let i = 0; i < cpuCount - 1; i++){
    cluster.fork();
}} else {
    require('./index');
}