$(document).ready( async () => {
  let response = await axios.get("https://api.darksky.net/forecast/8eeafa93fa171bb970bfac9b03caa3a3/-18.9127749,-48.2755227?exclude=minutely,hourly,daily,flags,alerts")
  let data = response.data;
  console.log(data)
  
  let valores = [
    data.timezone.replace("_", " ").replace("/", ", "),
    data.latitude,
    data.longitude,
    `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
    data.currently.summary,
    data.currently.precipIntensity,
    data.currently.precipProbability,
    data.currently.temperature,
    data.currently.apparentTemperature,
    data.currently.dewPoint,
    data.currently.humidity,
    data.currently.pressure,
    data.currently.windSpeed,
    data.currently.windGust,
    data.currently.windBearing,
    data.currently.cloudCover,
    data.currently.uvIndex,
    data.currently.visibility,
    data.currently.ozone,
    data.offset,
  ]
  
  let colunas = [
    "Local",
    "Latitude",
    "Longitude",
    "Data/Hora",
    "Resumo",
    "Intensidade de precipitação",
    "Probabilidade de precipitação",
    "Temperatura",
    "Sensação térmica",
    "Ponto de orvalho",
    "Umidade",
    "Pressão",
    "Velocidade do vento",
    "Rajada de vento",
    "Direção do vento",
    "Cobertura de nuvens",
    "Índice UV",
    "Visibilidade",
    "Ozônio",
    "Deslocamento"
  ]

  let tabela = $("#tabela");

  colunas.forEach((coluna, index) => {
    let tr = $("<tr>");
    let th = $("<th>");
    th.text(coluna);
    let td = $("<td>");
    td.text(valores[index]);
    tr.append(th);
    tr.append(td);
    tabela.append(tr);
  })
})

