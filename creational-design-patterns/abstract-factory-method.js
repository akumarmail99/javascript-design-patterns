const Factory = function() {
    this.createEmloyee = function(type) {
        let employee;

        if (type == 'full-time') {
            employee = new FullTime();
        } else if (type == 'part-time') {
            employee = new PartTime();
        } else if (type == 'temporary') {
            employee = new Temporary();
        } else if (type == 'contractor') {
            employee = new Contractor();
        }

        employee.type = type;

        employee.getPayDetail = function() {
            console.log(`${type} employee got ${employee.hourly}/hourly`);
        }

        return employee;
    }

}
function FullTime() {
    this.hourly = '$50'
}

function PartTime() {
    this.hourly = '$40';
}

function Temporary() {
    this.hourly = '$30';
}

function Contractor() {
    this.hourly = '$20';
}


const factoryIns1 = new Factory().createEmloyee('part-time');

factoryIns1.getPayDetail();