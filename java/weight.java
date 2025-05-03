package java;

import java.util.*;

public class weight {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        while (T-- > 0) {
            int n = sc.nextInt();
            int[] arr = new int[n];

            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }

            int i = 0, j = n - 1;
            int harry = arr[0], john = 0;
            int lastHarry = arr[0];
            int lastJohn = 0;

            harry += lastHarry;
            i++;

            while (i <= j) {
                lastJohn = 0;

                while (i <= j && lastJohn <= lastHarry) {
                    lastJohn += arr[j];
                    j--;
                }

                john += lastJohn;
                lastHarry = 0;
                while (i <= j && lastHarry <= lastJohn) {
                    lastHarry += arr[i];
                    i++;
                }
                harry += lastHarry;

            }

            System.out.println(harry + " " + john);
        }
        sc.close();
    }
}
