import os

def combine_css_files(directory):
    # Comprobar si el directorio existe
    if not os.path.isdir(directory):
        print(f"El directorio {directory} no existe.")
        return

    combined_css_content = ""
    
    # Iterar sobre todos los archivos en el directorio
    for root, dirs, files in os.walk(directory):
        for file in files:
            # Filtrar archivos .css
            if file.endswith(".css"):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as css_file:
                    combined_css_content += css_file.read() + "\n"
    
    # Guardar el contenido combinado en un nuevo archivo
    combined_file_path = "./styles.css"
    with open(combined_file_path, 'w', encoding='utf-8') as combined_file:
        combined_file.write(combined_css_content)
    
    print(f"Archivos .css combinados en {combined_file_path}")

# Ejemplo de uso
directorio = "styles"
while not os.path.exists(directorio):
  directorio = input("Ingresa ruta al directorio: ")

combine_css_files(directorio)
