const apiKey = "6c1fe0be11c938d13b63537c15a3413b";

export abstract class ApiBaseService {
    
  protected GetApiHeaders() {
    return (
      {'x-apisports-key': apiKey}
    );
  }
}