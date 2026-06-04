function generarExcusas(){
    const excuses=[
        "Me quedado dormio"
        "Me puesto malisimo"
        "Me perdido en narnia"
        "Me hecho un squinze"
    ];
  
    const randomIndex = Math.floor(Math.random() * excuses.length);
    return excuses[randomIndex];
}
document.querySelector("generate-button").addEventListener("click", () => {
    const excuse = generateExcuse();
    document.getElementById("excuse").innerText = excuse;
});