const os = require("os");
const path = require("path");
const { json } = require("stream/consumers");

//1. Operating system platform
console.log("Platform:",os.platform());// "linux", "darwin"(maxOS), "win32"

//2. Operating system type
console.log("OS Type:",os.type())// "Linux", "Darwin", "Windows_NT"

//3. Operating system release
console.log("Release:",os.release());// Kernal version or Windows release

//4. Operating system architecture
console.log("Architecture:",os.arch());// "x64", "arm", "ia32"

//5. System uptime in seconds
console.log("Uptime (seconds):",os.uptime());
console.log("Uptime (hours):",os.uptime() / 3600);

//6. Total system memory
console.log("Total Memory:", os.totalmem()/(1024*1024*1024),"GB");

//7. Free system memory
console.log("Free Memory:", os.freemem() / (1024*1024*1024), "GB");

//8. Memory usage percentage
console.log("Memory Usage:",((os.totalmem() - os.freemem())/ os.totalmem() * 100).toFixed(2), "%");

//9. CPU information
console.log("CPU Info:", os.cpus());
console.log("CPU Count:",os.cpus().length);

//10. Average system load (1,5,15 minutes)
console.log("Load Average:",os.loadavg());

//11. Current user information
console.log("User Info:",os.userInfo());
console.log("Home Directory:",os.homedir());

//12. Hostname
console.log("Hostname:",os.hostname());

//13. Network interfaces
console.log("Network Interfaces:",os.networkInterfaces());

//14. Temporary directory
console.log("Temp Directory:",os.tmpdir());

//15. End-of-line marker for the OS
console.log("End of Line:",JSON.stringify(os.EOL)); // "\n" on POSIX, "\r\n" on Windows

//16. OS constants (error codes, signals, etc.)
console.log("OS Constants:",os.constants);

//Qustion 1. System Monitor: Create a function that displays:
    //Current memory usage (percentage)
    //CPU count and model
    //System uptime in human-readable format

function systemMonitor() {
    console.log('\n===== SYSTEM MONITOR =====');
    console.log(`Memory Usage: ${((os.totalmem() - os.freemem()) / os.totalmem() * 100).toFixed(2)}%`);
    console.log(`CPU Count: ${os.cpus().length}`);
    console.log(`CPU Model: ${os.cpus()[0].model}`);

    const uptime = os.uptime();
    const hours = Math.floor(uptime/3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    console.log(`Uptime: ${hours}h ${minutes}m`);
}

systemMonitor()

//Qustion 2. Write a script that lists all network interfaces and their IP addresses.

function listNetworkInterfaces() {
    const interfaces = os.networkInterfaces();
    console.log("\n===== NETWORK INTERFACES ======");

    Object.keys(interfaces).forEach(name => {
        console.log(`\nInterface: ${name}`);
        interfaces[name].forEach(details => {
            if(details.family === "IPv4"){
                console.log(`IPv4:${details.address}`)
            }
        })
    })
}

listNetworkInterfaces()

//qustions 1. System Monitor:Create a function that displays:
    //Current memory usage (percentage)
    //CPU count and model
    //System uptime in human-readable format

//System Monitor Function
function systemMonitor(){
    //Memory information
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const memUsagePercent = (usedMem / totalMem * 100).toFixed(2);

    //CPU information
    const cpus = os.cpus();
    const cpuModel = cpus[0].model;
    const cpuCount = cpus.length;

    //Uptime information
    const uptime = os.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    console.log("\n===== SYSTEM MONITOR =====");
    console.log(`Memory Usage: ${memUsagePercent}% (${(usedMem / (1024 ** 3)).toFixed(2)} GB used of ${(totalMem / (1024 ** 3)).toFixed(2)} GB)`);
    console.log(`CPU: ${cpuCount} cores - ${cpuModel}`);
    console.log(`Uptime: ${hours}h ${minutes}m ${seconds}s`);
    console.log("==========================")
}

systemMonitor()

//Qustion 2.Network Checker: Write a script that lists all network interfaces and their IP addresses.

//Network Checker

function networkChecker(){
    const interfaces = os.networkInterfaces();

    console.log("\n===== NETWORK INTERFACES =====");
    Object.entries(interfaces).forEach(([name,details]) => {
        console.log(`\nInterface: ${name}`);

        details.forEach(details => {
            if(details.family === "IPv4"){
                console.log(`IPv4: ${details.address}`);
            console.log(`Netmask: ${details.netmask}`);
            }else if (details.family === "IPv6"){
                console.log(`IPv6: ${details.address}`);
            }
        });
    });
    console.log("========================")
}

networkChecker()

//Qustion 3. Temp File Handler: Create a utility that generates temp file paths using os.tmpdir().

//Temp File Handler

function createTempFilePath(prefix = "temp", suffix = ""){
    const tempDir = os.tmpdir();
    const randomString = Math.random().toString(36).substring(2,8);
    const fileName = `${prefix}_${randomString}${suffix}`;

    return path.join(tempDir,fileName);
}

//Example usage:
console.log("Temp file path:", createTempFilePath());
console.log("Temp image path:", createTempFilePath("img",".jpg"));


//Qustion 4. Platform Checker: Implement functions to check if the current OS is Windows, macOS, or Linux.

//Platform Checker

function isWindows(){
    return os.platform() === "win32";
}

function isMacOS(){
    return os.platform() === "darwin";
}

function isLinux(){
    return os.platform() === "linux";
}

function getOSDetails(){
    return{
        platform:os.platform(),
        type:os.type(),
        release:os.release(),
        isWindows:isWindows(),
        isMacOS:isMacOS(),
        isLinux:isLinux()
    };
}

console.log("OS Details:", getOSDetails());

//Qustion 5. System Health Dashboard: Build a console dashboard that updates every seconds showing.
    //Memory usage
    //CPU load
    //Uptime
    //Network status

//System Health Dashboard

function systemHealthDashboard(interval = 1000) {
    function updateDashboard(){
        console.clear();

        //Memory info
        const totalMem = os.totalmem();
        const freeMem = os.freemem();
        const usedMem = totalMem - freeMem;
        const memUsagePercent = (usedMem/totalMem * 100).toFixed(2);

        //CPU info
        const loadAvg = os.loadavg();
        const cpuUsage = (loadAvg[0] / os.cpus().length * 100).toFixed(2);

        //Uptime
        const uptime = os.uptime();
        const hours = Math.floor(uptime / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);

        //Network
        const interfaces = os.networkInterfaces();
        let activeInterfaces = 0;
        Object.values(interfaces).forEach(details => {
            if(details.some(d => d.address && !d.internal)) activeInterfaces++;
        });

        console.log("===== SYSTEM HEALTH DASHBOARD =====");
        console.log(`Memory Usage: ${memUsagePercent}%`);
        console.log(`CPU Load (1min avg): ${cpuUsage}%`);
        console.log(`Uptime: ${hours}h ${minutes}m`);
        console.log(`Active Network Interfaces: ${activeInterfaces}`);
        console.log("=======================")
    }

    //Update immediately and then at interval
    updateDashboard();
    setInterval(updateDashboard,interval);
}

//Start the dashboard (updates every second)
systemHealthDashboard();