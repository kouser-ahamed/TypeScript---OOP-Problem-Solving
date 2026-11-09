function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier === undefined) {
    return value * 2;
  }
  return value * multiplier;
}


function processInput(input: string | number | boolean): string | number {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    if (input === true) {
      return "Active";
    }
    return "Inactive";
  }
}

function formatCoordinate(coordinate: readonly [number, number, string]): string {
  const latitude = coordinate[0];
  const longitude = coordinate[1];
  const locationName = coordinate[2];
  return "Location: " + locationName + " (" + latitude + ", " + longitude + ")";
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      result.push(arrays[i][j]);
    }
  }
  return result;
}



interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  const popularCourses: Course[] = [];
  for (const course of courses) {
    if (course.isPublished === true && course.students >= minStudents) {
      popularCourses.push(course);
    }
  }
  return popularCourses;
}


function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const values: T[K][] = [];
  for (const item of items) {
    values.push(item[key]);
  }
  return values;
}


class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return "Employee: " + this.name + ", Base Salary: " + this.baseSalary;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return "Manager of " + this.department + ": " + this.name;
  }
}

async function validateAgeAsync(age: number): Promise<string> {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  }

  await new Promise<void>((resolve: () => void): void => {
    setTimeout(resolve, 1000);
  });

  return "Access Granted";
}



