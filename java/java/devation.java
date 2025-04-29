package java;

import java.util.*;

public class devation {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int arr[] = new int[n];
        int m = 0;
        double d = 0;
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int sum = 0;
        for (int i = 0; i < n; i++) {
            sum = sum + arr[i];
            m = sum / n;
        }
        for (int i = 0; i < n; i++) {
            d = d + Math.pow((arr[i] - m), 2);
        }
        d = Math.sqrt(d / n);

        System.out.printf("%.4f\n", d);
        sc.close();

    }

}
