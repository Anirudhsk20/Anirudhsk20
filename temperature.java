import java.util.*;
class temperature
{
    public static void main(String args[])
    {
        Scanner in=new Scanner(System.in);
        int n;double cel,far,kel;
        System.out.println("Enter 1 for celsius to other tem");
        System.out.println("Enter 2 for faranheit to other tem");
        System.out.println("Enter 3 for Kelvin to other tem");
        n=in.nextInt();
        switch (n)
        {
            case 1:
            System.out.println("Enter the temperature in celsius");
            cel=in.nextDouble();
            far=(cel*9/5)+32;
            kel=cel+273.15;
            System.out.println("Temperature in faranheit is "+far+" and kelvin is "+kel);
            break;
            case 2:
            System.out.println("Enter the temperature in faranheit");
            far=in.nextDouble();
            cel=(far-32)*5/9;
            kel=((far-32)*5/9)+273.15;
            System.out.println("Temperature in celsius is "+cel+" and kelvin is "+kel);
            break;
            case 3:
            System.out.println("Enter the temperature in Kelvin");
            kel=in.nextDouble();
            far=(kel-273.15)*9/5+32;
            cel=kel-273.15;
            System.out.println("Temperature in faranheit is "+far+" and celsius is "+cel);
            break;
            default:
            System.out.println("Invalid output");
        }

    }
}