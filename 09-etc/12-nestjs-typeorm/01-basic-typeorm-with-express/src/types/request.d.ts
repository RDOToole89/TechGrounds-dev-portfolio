// overwriting the original type definition file to improve robustness of type checking

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}
