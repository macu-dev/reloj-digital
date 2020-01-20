(() =>{

const cambiarHora = () => {

  let fecha = new Date (),
      horas = fecha.getHours(),
      ampm,
      dia = fecha.getDate(),
      minutos = fecha.getMinutes(),
      segundos = fecha.getSeconds(),
      diaSemana = fecha.getDay(),
      mes = fecha.getMonth();
      anio = fecha.getFullYear();

  let hrs = document.getElementById('hora'),
      min = document.getElementById('minutos'),
      seg = document.getElementById('segundos'),
      am_pm = document.getElementById('periodosDia'),
      dia_semana = document.getElementById('diaSemana'),
      dias = document.getElementById('dia'),
      meses = document.getElementById('mes'),
      anios = document.getElementById('año');

  let Semana = ['Domingo', 'Lunes','Martes','Miercoles','Jueves','Viernes', 'Sabado'];

  let month = ['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

  dia_semana.textContent = Semana[diaSemana];

  dias.textContent = dia;
  
  meses.textContent = month[mes];

  anios.textContent = anio;

  
  if(horas == 0 ){
    horas = 12;
  };

  hrs.textContent = horas;
  
  
  if(minutos < 10){
    minutos ='0' + minutos;
  };

  if(segundos < 10 ){
    segundos = '0'+segundos;
  };

  min.textContent = minutos;

  seg.textContent = segundos;
  
  if(horas >= 12){
    horas = horas - 12;
    ampm = 'pm'; 
  }else{
    ampm = 'am';
  }

  am_pm.textContent = ampm;

};

  cambiarHora();

  setInterval(() => {cambiarHora()},1000);

})();