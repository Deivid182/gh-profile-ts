interface HttpErrorStatus {
  [statusCode: number]: string;
}

export const httpErrorStatus: HttpErrorStatus = {
  500: "Unexpected error, please try again",
  404: "User not found"
}

export class FetchError extends Error {
  constructor(public res: Response, message?: string) {
    super(message)
  }
}

export function formatDateToRelative(dateString: string) {
  // Create a Date object
  const date = new Date(dateString);

  // Calculate the difference in days between now and the input date
  const diffDays = Math.floor((new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

  // Determine the appropriate label based on the number of days
  let label;
  if (diffDays === 0) {
    label = 'today';
  } else if (diffDays === 1) {
    label = 'yesterday';
  } else {
    label = `${diffDays} days ago`;
  }

  return `updated ${label}`;
}
