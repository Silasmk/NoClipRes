import tkinter as tk
from tkinter import filedialog, messagebox

def add_image_link(image_path, url):
    js_file = 'script.js'

    try:
        with open(js_file, 'r') as file:
            lines = file.readlines()
        
        for i, line in enumerate(lines):
            if 'const imageLinks = [' in line:
                break
        else:
            raise ValueError("Could not find the imageLinks array in the script.js file.")

        new_entry = f'    {{ src: \'{image_path}\', url: \'{url}\' }},\n'
        lines.insert(i + 1, new_entry)

        with open(js_file, 'w') as file:
            file.writelines(lines)

        messagebox.showinfo("Success", "Image link added successfully!")
    except Exception as e:
        messagebox.showerror("Error", f"An error occurred: {e}")

def browse_image():
    file_path = filedialog.askopenfilename(filetypes=[("Image files", "*.jpg *.jpeg *.png")])
    if file_path:
        entry_image_path.delete(0, tk.END)
        entry_image_path.insert(0, file_path)

def submit():
    image_path = entry_image_path.get()
    url = entry_url.get()

    if not image_path or not url:
        messagebox.showerror("Error", "Both image path and URL are required.")
        return

    add_image_link(image_path, url)

app = tk.Tk()
app.title("Add Image Link")

tk.Label(app, text="Image Path:").grid(row=0, column=0, padx=10, pady=5)
entry_image_path = tk.Entry(app, width=50)
entry_image_path.grid(row=0, column=1, padx=10, pady=5)
tk.Button(app, text="Browse", command=browse_image).grid(row=0, column=2, padx=10, pady=5)

tk.Label(app, text="URL:").grid(row=1, column=0, padx=10, pady=5)
entry_url = tk.Entry(app, width=50)
entry_url.grid(row=1, column=1, padx=10, pady=5)

tk.Button(app, text="Submit", command=submit).grid(row=2, column=0, columnspan=3, pady=20)

app.mainloop()
