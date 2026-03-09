function generateCPF() {
    const numRandom = () => Math.floor(Math.random() * 9);
    
    // Gera os 9 primeiros dígitos
    let n = Array.from({length: 9}, numRandom);
    
    // Calcula o 1º dígito
    let d1 = n.reduce((acc, curr, i) => acc + (curr * (10 - i)), 0);
    d1 = 11 - (d1 % 11);
    if (d1 >= 10) d1 = 0;
    n.push(d1);
    
    // Calcula o 2º dígito
    let d2 = n.reduce((acc, curr, i) => acc + (curr * (11 - i)), 0);
    d2 = 11 - (d2 % 11);
    if (d2 >= 10) d2 = 0;
    n.push(d2);
    
    // Formata a string (ex: 000.000.000-00)
    const s = n.join('');
    return `${s.slice(0,3)}.${s.slice(3,6)}.${s.slice(6,9)}-${s.slice(9,11)}`;
}

function updateCPF() {
    document.getElementById('cpf-result').value = generateCPF();
}