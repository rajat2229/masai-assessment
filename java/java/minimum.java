package java;

import java.util.*;

public class minimum {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        while (T-- > 0) {
            int N = sc.nextInt();
            int K = sc.nextInt();
            int[] arr = new int[N];

            for (int i = 0; i < N; i++) {
                arr[i] = sc.nextInt();
            }

            int minSum = Integer.MAX_VALUE;
            int currentSum = 0;

            for (int i = 0; i < K; i++) {
                currentSum += arr[i];
            }
            minSum = currentSum;

            for (int i = K; i < N; i++) {
                currentSum += arr[i] - arr[i - K];
                minSum = Math.min(minSum, currentSum);
            }

            System.out.println(minSum);
        }
        sc.close();
    }
}
