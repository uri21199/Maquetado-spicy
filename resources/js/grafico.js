const this_year = moment().format('YYYY');
const last_year = moment().subtract(1,'y').format('YYYY');
const hoy = moment().format('DD/MM/YYYY');
const semana2 = moment().subtract(1,'d').format('DD/MM/YYYY');
const semana3 = moment().subtract(2,'d').format('DD/MM/YYYY');
const semana4 = moment().subtract(3,'d').format('DD/MM/YYYY');
const semana5 = moment().subtract(4,'d').format('DD/MM/YYYY');
const semana6 = moment().subtract(5,'d').format('DD/MM/YYYY');
const semana7 = moment().subtract(6,'d').format('DD/MM/YYYY');
const trimestre1 = moment().subtract(90,'d').format('DD/MM/YYYY');
const trimestre2 = moment().subtract(90,'d').add(1,'w').format('DD/MM/YYYY');
const trimestre3 = moment().subtract(90,'d').add(2,'w').format('DD/MM/YYYY');
const trimestre4 = moment().subtract(90,'d').add(3,'w').format('DD/MM/YYYY');
const trimestre5 = moment().subtract(90,'d').add(4,'w').format('DD/MM/YYYY');
const trimestre6 = moment().subtract(90,'d').add(5,'w').format('DD/MM/YYYY');
const trimestre7 = moment().subtract(90,'d').add(6,'w').format('DD/MM/YYYY');
const trimestre8 = moment().subtract(90,'d').add(7,'w').format('DD/MM/YYYY');
const trimestre9 = moment().subtract(90,'d').add(8,'w').format('DD/MM/YYYY');
const trimestre10 = moment().subtract(90,'d').add(9,'w').format('DD/MM/YYYY');
const trimestre11 = moment().subtract(90,'d').add(10,'w').format('DD/MM/YYYY');
const trimestre12 = moment().subtract(90,'d').add(11,'w').format('DD/MM/YYYY');
const trimestre13 = moment().subtract(90,'d').add(12,'w').format('DD/MM/YYYY');
const mes1 = moment().startOf('month').format('DD/MM/YYYY');
const mes2 = moment().startOf('month').add(1,'w').format('DD/MM/YYYY');
const mes3 = moment().startOf('month').add(2,'w').format('DD/MM/YYYY');
const mes4 = moment().startOf('month').add(3,'w').format('DD/MM/YYYY');
const last_mes1 = moment().startOf('month').subtract(1,'M').format('DD/MM/YYYY');
const last_mes2 = moment().startOf('month').subtract(1,'M').add(1,'w').format('DD/MM/YYYY');
const last_mes3 = moment().startOf('month').subtract(1,'M').add(2,'w').format('DD/MM/YYYY');
const last_mes4 = moment().startOf('month').subtract(1,'M').add(3,'w').format('DD/MM/YYYY');

function semana(chart){
    chart.data.labels.push(semana7);
    chart.data.labels.push(semana6);
    chart.data.labels.push(semana5);
    chart.data.labels.push(semana4);
    chart.data.labels.push(semana3);
    chart.data.labels.push(semana2);
    chart.data.labels.push(hoy);

    chart.update();
}

function semanaData(chart, i, valor){
    chart.data.datasets[i].data = valor;
}

function mes(chart){
    chart.data.labels.push(mes1);
    chart.data.labels.push(mes2);
    chart.data.labels.push(mes3);
    chart.data.labels.push(mes4);
    //actualizo
    chart.update();
}

function mesData(chart, i, valor){
    chart.data.datasets[i].data = valor;
}

function mesAnterior(chart){
    chart.data.labels.push(last_mes1);
    chart.data.labels.push(last_mes2);
    chart.data.labels.push(last_mes3);
    chart.data.labels.push(last_mes4);
    
    //actualizo
    chart.update();
}

function mesAnteriorData(chart, i, valor){
    chart.data.datasets[i].data = valor;
}

function trimestre(chart){
    //elimino el último label
    chart.data.labels.push(trimestre1);
    chart.data.labels.push(trimestre2);
    chart.data.labels.push(trimestre3);
    chart.data.labels.push(trimestre4);
    chart.data.labels.push(trimestre5);
    chart.data.labels.push(trimestre6);
    chart.data.labels.push(trimestre7);
    chart.data.labels.push(trimestre8);
    chart.data.labels.push(trimestre9);
    chart.data.labels.push(trimestre10);
    chart.data.labels.push(trimestre11);
    chart.data.labels.push(trimestre12);
    chart.data.labels.push(trimestre13);

    //actualizo
    chart.update();
}

function trimestreData(chart, i, valor){
    chart.data.datasets[i].data = valor;
}

function año(chart){
    chart.data.labels = ["Enero "+this_year,"Febrero "+this_year,"Marzo "+this_year,"Abril "+this_year,"Mayo "+this_year,"Junio "+this_year,"Julio "+this_year,"Agosto "+this_year,"Septiembre "+this_year,"Octubre "+this_year,"Noviembre "+this_year,"Diciembre "+this_year];

    //actualizo
    chart.update();
}

function añoData(chart, i, valor){
    chart.data.datasets[i].data = valor;
}

function añoAnterior(chart){
    chart.data.labels.push('Enero '+last_year);
    chart.data.labels.push('Febrero '+last_year);
    chart.data.labels.push('Marzo '+last_year);
    chart.data.labels.push('Abril '+last_year);
    chart.data.labels.push('Mayo '+last_year);
    chart.data.labels.push('Junio '+last_year);
    chart.data.labels.push('Julio '+last_year);
    chart.data.labels.push('Agosto '+last_year);
    chart.data.labels.push('Septiembre '+last_year);
    chart.data.labels.push('Octubre '+last_year);
    chart.data.labels.push('Noviembre '+last_year);
    chart.data.labels.push('Diciembre '+last_year);

    //actualizo
    chart.update();
}

function añoAnteriorData(chart, i, valor){
    // chart.data.datasets[i].data.push(<//?=$valor;?>);
    // chart.data.datasets[i].data.push(<//?=$valor;?>);
    // chart.data.datasets[i].data.push(50);
    chart.data.datasets[i].data = valor;
}

var ctx = document.getElementById('prueba').getContext('2d');
var linea = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [],
        datasets: [{
            label: 'Me Gusta',
            backgroundColor: 'rgb(220,53,69)',
            borderColor: 'rgb(220,53,69)',
            data: [],
            fill: false
        },
        {label: 'Me Encanta',
            backgroundColor: 'rgb(108,117,125)',
            borderColor: 'rgb(108,117,125)',
            data: [],
            fill: false
        },
        {label: 'Me Divierte',
            backgroundColor: 'rgb(0, 0, 0)',
            borderColor: 'rgb(0,0,0)',
            data: [],
            fill: false
        },
        {
            label: 'Me Asombra',
            backgroundColor: 'rgb(220,53,69)',
            borderColor: 'rgb(220,53,69)',
            data: [],
            fill: false
        },
        {label: 'Me entristece',
            backgroundColor: 'rgb(108,117,125)',
            borderColor: 'rgb(108,117,125)',
            data: [],
            fill: false
        },
        {label: 'Me Enoja',
            backgroundColor: 'rgb(0, 0, 0)',
            borderColor: 'rgb(0,0,0)',
            data: [],
            fill: false
        }]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            position: 'top',
            text: 'Título de Prueba'
        },
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 10
                    }
                }]
            }

    }
});
