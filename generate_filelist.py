import os
import json

OUTPUT_FILE = 'filelist.js'
IMAGE_EXTS = {'.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp'}

def scan_folder(base_path):
    data = {}
    base = os.path.abspath(base_path)
    print(f"正在扫描: {base}")
    if not os.path.exists(base):
        print(f"警告：文件夹 {base} 不存在")
        return data

    # 根目录文件（放入“根目录”）
    root_files = []
    for file in os.listdir(base):
        full = os.path.join(base, file)
        if os.path.isfile(full):
            ext = os.path.splitext(file)[1].lower()
            if ext in IMAGE_EXTS:
                root_files.append(file)
    if root_files:
        data["根目录"] = root_files
        print(f"  根目录找到 {len(root_files)} 个图片")

    # 子文件夹
    for root, dirs, files in os.walk(base):
        rel_path = os.path.relpath(root, base)
        if rel_path == '.':
            continue
        folder_name = rel_path.replace('\\', '/')
        images = []
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in IMAGE_EXTS:
                images.append(file)
        if images:
            data[folder_name] = images
            print(f"  子文件夹 {folder_name} 找到 {len(images)} 个图片")
    return data

print("开始扫描文件夹...")
hd_data = scan_folder('HD')
clothes_data = scan_folder('clothes')

with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
    f.write('// 自动生成的文件列表\n')
    f.write(f'const hdData = {json.dumps(hd_data, ensure_ascii=False, indent=2)};\n')
    f.write(f'const clothesData = {json.dumps(clothes_data, ensure_ascii=False, indent=2)};\n')
    f.write('// 挂载到 window 对象\n')
    f.write('if (typeof window !== "undefined") {\n')
    f.write('    window.hdData = hdData;\n')
    f.write('    window.clothesData = clothesData;\n')
    f.write('}\n')
    f.write('console.log("filelist.js loaded, hdData:", hdData);\n')  # 添加调试输出

print(f"\n已生成 {OUTPUT_FILE}")