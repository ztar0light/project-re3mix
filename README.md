CoreXY Conversion for Ender 3 and clones
This open-source project aims to convert Voxelab Aquila X2 and other Ender 3-based 3D printers into CoreXY systems. The mod uses mostly stock parts combined with off-the-shelf 6mm GT2 belt systems and 3D-printable components. This project is inspired by the Voron 2.4 design, offering an affordable solution for serious rapid prototyping and development.

Features
CoreXY Kinematics: Achieve higher print speeds and better precision by converting your Voxelab Aquila X2 or Ender 3 into a CoreXY system.
Belt-Driven Z-Axis: A single motor drives the Z-axis, providing smoother movement and reducing costs.
Integrated Enclosure: Built-in enclosure options using clear tarp for affordability, enhancing print quality by maintaining stable environmental conditions.
Customizable Firmware: Supports both Marlin and Klipper, allowing for advanced features like input shaping.
Designed for Modularity: The design allows for easy upgrades, including high-temp hotends, BLTouch, dual Z-axis, and more.
Getting Started
Prerequisites
3D Printer: Voxelab Aquila X2, Ender 3, or a similar Ender 3-based printer.
Firmware: Marlin or Klipper (depending on your setup).
Materials: PETG filament for printed parts, standard 6mm GT2 belts, pulleys, linear rails (optional).
Parts List
Belts & Pulleys: 6mm GT2 belts, appropriate pulleys.
Printed Parts: Available in the /STL directory.
Linear Rails (optional): For enhanced stability, especially for the X-axis.
Electronics:
Stock stepper motors (NEMA 17).
Raspberry Pi (for Klipper, if needed).
BLTouch (optional for automatic bed leveling).
Assembly Instructions
Disassembly: Remove existing components as required to prepare for the CoreXY conversion.
Frame Modification: Follow the instructions to modify the frame, including the relocation of Z extrusions.
Belt Installation: Install the GT2 belts and pulleys according to the provided diagrams.
Firmware Setup:
For Marlin: Use the provided configuration files.
For Klipper: Set up the Raspberry Pi and flash the firmware.
Enclosure: Assemble the optional enclosure using clear tarp and other provided materials.
Usage
Once assembled, your printer will function as a CoreXY system. For best results:

Calibrate the bed using BLTouch or manual leveling.
Tune print settings: Adjust speeds, acceleration, and input shaping (if using Klipper) for optimal performance.
Contributing
We welcome contributions from the community! Whether it's improving the design, enhancing documentation, or adding new features, your input is valuable.

Fork the repository.
Create a new branch.
Make your changes.
Submit a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Special thanks to the Voron community for inspiration and to all contributors who make this project possible.
