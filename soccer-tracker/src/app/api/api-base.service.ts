const apiKey = "d38eefd99d2a343db3764073b8078596";

export abstract class ApiBaseService {
    
  protected GetApiHeaders() {
    return (
      {'x-apisports-key': apiKey}
    );
  }
}