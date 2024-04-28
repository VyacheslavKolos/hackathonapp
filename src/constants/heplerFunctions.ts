type ErrorResponse = {
  status: number;
  data: ErrorData;
};

type ErrorData =
  | {
      detail: string;
    }
  | {
      [key: string]: string[];
    };

// eslint-disable-next-line import/prefer-default-export
export const handleApiError = (errorData: ErrorResponse): string => {
  const { status, data } = errorData;
  let errorMessage = '';

  if (status === 401) {
    // @ts-ignore
    errorMessage = data.detail || 'Unauthorized';
  } else if (status === 400) {
    Object.entries(data).forEach(([field, messages]) => {
      messages.forEach((message: any) => {
        errorMessage += `${field}: ${message}\n`;
      });
    });
  } else {
    errorMessage = 'An error occurred';
  }

  return errorMessage;
};
