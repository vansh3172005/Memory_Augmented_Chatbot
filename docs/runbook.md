# Runbook

## Backend

```powershell
Set-Location 'C:\Users\yashn\OneDrive\Desktop\Memory_Augmented_Chatbot\backend'
& 'C:\Users\yashn\AppData\Local\Programs\Python\Python311\python.exe' -m uvicorn app.main:app --host 0.0.0.0 --port 8000
```

## Frontend

```powershell
Set-Location 'C:\Users\yashn\OneDrive\Desktop\Memory_Augmented_Chatbot\frontend'
& 'C:\Program Files\nodejs\npm.cmd' run dev
```

## Tests

```powershell
Set-Location 'C:\Users\yashn\OneDrive\Desktop\Memory_Augmented_Chatbot\backend'
& 'C:\Users\yashn\AppData\Local\Programs\Python\Python311\python.exe' -m pytest -q
```
