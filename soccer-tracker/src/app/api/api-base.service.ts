const apiKey = "f833f90208d9be421388ceb9129c7a77";

export abstract class ApiBaseService {
    
  protected GetApiHeaders() {
    return (
      {'x-apisports-key': apiKey}
    );
  }
}