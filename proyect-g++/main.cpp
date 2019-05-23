#include <iostream>
using namespace std;

main()
{
    int dd = 0; // dia
    int mm = 0; // mes
    int aa = 0; // anio
    // declarar funciones
    int calcularDias(int aa, int mm, int dd);
    char s; // Tecla para salir

    do
    {
        system("CLS"); // this clears the screen
        cout << "=======================================================\n";
        cout << "\t\t **Calcular numero de dias desde 01-01-1960**\n";
        cout << "=======================================================\n";

        cout << "Ingrese el anio : ";
        cin >> aa;

        cout << "Ingrese el mes : ";
        cin >> mm;

        cout << "Ingrese el dia : ";
        cin >> dd;

        cout << "=======================================================\n";
        cout << "La fecha ingresada es : " << dd << "-" << mm << "-" << aa << "\n";
        cout << "Respuesta ***==========================================\n";
        cout << "Existen : " << calcularDias(aa, mm, dd) << " dias\n";
        cout << "=======================================================\n\n";
        cout << "Ingrese S y enter para salir o presione N + enter para continuar: \n";
        cin >> s;
    } while (s != 'S' && s != 's');
}

int calcularDias(int aa, int mm, int dd)
{
    int aa_init = 1960;
    int anio_aux = aa_init;
    int mm_init = 1;
    int dd_init = 1;
    int numDias = 0;
    int anioRestante = 0;

    // a) El dia del año en curso se puede determinar
    numDias += ((int)(30.42 * (mm - 1)) + dd);

    // b) Si mes es febrero incrementar dia en 1
    if (mm == 2)
        numDias++;

    // c) Si mes es marzo,abril,mayo,junio o julio decrementar dia en 1
    if (2 < mm && mm < 8)
        numDias--;

    // d) Si es año bisiesto incrementar dia en 1
    if (aa % 4 == 0 && mm > 2)
        numDias++;

    // e) Incrementar el valor de dia en 1461 por cada ciclo completo de 4 años
    while (4 < (aa - anio_aux))
    {
        numDias += 1461;
        anio_aux += 4;
    }
    anioRestante = aa - anio_aux;

    // f) Sumar 365 dias por cada año a partir del ultimo año completo de 4 años
    numDias += anioRestante * 365;

    return numDias;
}
