package java;

import java.util.Scanner;

public class leadership {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        scanner.nextLine();

        String[] names = new String[n];
        int[] marks = new int[n];

        for (int i = 0; i < n; i++) {
            String line = scanner.nextLine();
            String[] parts = line.split(" ");
            names[i] = parts[0];
            marks[i] = Integer.parseInt(parts[1]);
        }

        String[] outputNames = new String[n];
        int[] outputMarks = new int[n];

        for (int i = 0; i < n; i++) {
            String line = scanner.nextLine();
            String[] parts = line.split(" ");
            outputNames[i] = parts[0];
            outputMarks[i] = Integer.parseInt(parts[1]);
        }

        for (int i = 0; i < n; i++) {
            int rank = 1;

            for (int j = 0; j < n; j++) {
                if (names[j].equals(outputNames[i]) && marks[j] == outputMarks[i]) {
                    for (int k = 0; k < n; k++) {
                        if (marks[k] > marks[j]) {
                            rank++;
                        } else if (marks[k] == marks[j] && k != j) {
                            if (names[k].compareTo(names[j]) < 0) {
                                rank++;
                            }
                        }
                    }
                    System.out.println(rank + " " + outputNames[i]);
                    break;
                }
            }
        }
        scanner.close();
    }
}

// 6
// rancho 45
// chatur 32
// raju 30
// farhan 28
// virus 32
// joy 45