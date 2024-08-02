import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    // return request.currentUser;
    console.log('request.session.usertId', request.session.userId);
    return 'hi there';
  },
);