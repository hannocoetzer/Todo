# Setup

1. Download all necessary software (see [Downloads](#downloads) section)
2. `git clone https://github.com/hannocoetzer/Todo.git`
3. `git switch master`
4. `python -m http.server 8000`
5. `cd TodoAPI\`
6. Open `C:\temp\todo\TodoAPI\TodoAPI.sln` (use **Visual Studio 2022**)
7. Change DefaultConnection string in `appsettings.json` → `DefaultConnection` to your local SQL Server
8. Rebuild solution (`Ctrl+Shift+B`)
9. Setup database by restoring `todo_db_20250925.bak`  
   **or using EF migration**:  
   - `dotnet ef migrations add Eerste`  
   - `dotnet ef database update`
10. Run in **Release mode** HTTPS (for optimal performance, no debug logging)  
    - If prompted: *click "Disable Just My Code" and continue*
11. Check Swagger at: <https://localhost:7144/swagger/index.html>
12. Check and test: <http://localhost:8000/>

---

# Downloads

- [Python](https://www.python.org/downloads/)
- [Latest Windows x64 .NET 9.0.110](https://dotnet.microsoft.com/en-us/download/dotnet/9.0)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- [SQL Server Management Studio (SSMS)](https://aka.ms/ssms/21/release/vs_SSMS.exe)

For EF migrations:  

```sh
dotnet tool install --global dotnet-ef
```


# Developer Test

### To run the FE project locally python -m http.server 8000 or use any other http-server

# Instructions

1. Create a repository for this project on Github or any git repository of your choice.
2. Build the backend for the todo application that will expose endpoints to READ, UPDATE, POST, DELETE.
3. The backend should be built in the latest version of .NET Core and utilize entity framework.
4. Store the todos in a SQL database of your choice.
5. In the frontend project there are comments to implement some of these endpoints.
6. Add the necassary documentation where applicable.
7. Add default todos also in the database that show once you run the project.

Once you are done send us a link to the repository.
