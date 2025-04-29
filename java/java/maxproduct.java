package java;

import java.util.*;

public class maxproduct {
    public static void main(String[] args) {
        int[] arr = { 10, 0, 2, 5, 4, 4, 7, -20 };
        int n = arr.length;
        Arrays.sort(arr);
        int a = arr[n - 1] * arr[n - 2];
        int b = arr[0] * arr[1];
        int result = Math.max(a, b);
        System.out.println(result);
    }
}
