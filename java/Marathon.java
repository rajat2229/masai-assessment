
import java.util.*;

public class Marathon {
    public static int solve(List<int[]> arr) {
        int te = 0, td = 0, ce = 0, start = 0;

        for (int i = 0; i < arr.size(); i++) {
            te += arr.get(i)[0];
            td += arr.get(i)[1];
            ce += (arr.get(i)[0] - arr.get(i)[1]);

            if (ce < 0) {
                start = i + 1;
                ce = 0;
            }
        }
        return (te >= td) ? start : -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        List<int[]> arr = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            arr.add(new int[] { a, b });
        }

        System.out.println(solve(arr));
        sc.close();
    }
}