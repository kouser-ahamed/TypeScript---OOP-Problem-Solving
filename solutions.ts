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
