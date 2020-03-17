let table = "\t";

for (let i = 1; i <= 10; i++)
{
    table += i + "\t";
}

table += "\n\n";

for (let i = 1; i <= 10; i++)
{
    table += i + "\t";
    for (let j = 1; j <= 10; j++)
    {
        table += i * j + "\t";
    }
    table += "\n";
}

console.log(table);
