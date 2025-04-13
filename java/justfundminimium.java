import java.util.*;

public class justfundminimium {
    public static void justFindMinimum(int N, List<String[]> operations) {
        Stack<Integer> stack = new Stack<>();
        Stack<Integer> minStack = new Stack<>();

        for (String[] op : operations) {
            if (op[0].equals("PUSH")) {
                int val = Integer.parseInt(op[1]);
                stack.push(val);
                if (minStack.isEmpty() || val <= minStack.peek()) {
                    minStack.push(val);
                }
            } else if (op[0].equals("POP")) {
                if (stack.isEmpty()) {
                    System.out.println("EMPTY");
                } else {
                    int removed = stack.pop();
                    if (removed == minStack.peek()) {
                        minStack.pop();
                    }
                }
            } else if (op[0].equals("MIN")) {
                if (minStack.isEmpty()) {
                    System.out.println("EMPTY");
                } else {
                    System.out.println(minStack.peek());
                }
            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = Integer.parseInt(sc.nextLine());
        List<String[]> operations = new ArrayList<>();

        for (int i = 0; i < N; i++) {
            operations.add(sc.nextLine().split(" "));
        }
        sc.close();

        justFindMinimum(N, operations);
    }
}
