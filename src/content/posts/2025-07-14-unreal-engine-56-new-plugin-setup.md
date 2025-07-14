---
title: "Unreal Engine 5.6: New Plugin Setup"
description: Unreal Engine 5.6 plugin setup
image: ../../assets/images/Screenshot_cropped.png
category: Game Development
tags:
  - Unreal Engine
published: 2025-07-14
updated: 2025-07-14
---
Unreal Engine 5.6 Plugins for New Projects:

When starting a new project in Unreal Engine, selecting the right plugins can significantly enhance development efficiency and expand project capabilities. Below is a curated list of essential plugins, including built-in options and third-party tools, that are frequently used in new Unreal Engine projects. All of these are built-in plugins unless specified otherwise.

**C++ Plugins:**

\* **Rider Integration** (Free, 3rd party from Rider): This plugin provides seamless integration between Unreal Engine and JetBrains Rider, a popular C++ IDE. It enhances the development workflow for C++ users by offering features like intelligent code completion, refactoring, and debugging directly within Rider.

\* **RiderLink** (Free, 3rd party from Rider): Working in conjunction with Rider Integration, RiderLink facilitates communication between Unreal Engine and Rider, ensuring a smooth and responsive development environment for C++ programming.

**GASP Plugins:**

GASP refers to a set of animation and gameplay-related plugins that often work together to create advanced character movement and interaction systems.

\* **Motion Warping**: This plugin allows for dynamic adjustment of character motion to align with environmental features or target locations, ensuring realistic and fluid animations during gameplay.

\* **Animation Warping**: Similar to Motion Warping, Animation Warping enables runtime modifications of animation curves to adapt character movements to various conditions, such as uneven terrain or specific interaction points.

\* **Pose Search**: A system for efficiently finding and blending animation poses based on desired attributes, leading to more natural and responsive character animations.

\* **Motion Trajectory**: This plugin helps define and control character motion paths, which is crucial for complex movements and AI behaviors.

\* **Deform Graph**: Used for advanced mesh deformation and animation, allowing for intricate and dynamic changes to character models.

\* **Chooser**: A versatile tool for selecting and blending different animation assets or behaviors based on specified conditions, providing flexibility in animation systems.

\* **Animation Locomotion Library**: Provides a foundation and tools for building robust and realistic character locomotion systems, often integrating with other animation plugins.

**GAS Plugins:**

GAS typically refers to the Gameplay Ability System, a powerful framework for defining and managing character abilities, attributes, and effects.

\* **Gameplay Abilities**: This is the core component of the Gameplay Ability System, allowing developers to define and execute various character abilities, such as attacks, spells, or defensive maneuvers. (As per Epic Games Developers documentation, this covers Attribute, Ability, Effect, Cue (Vfx / Sfx), etc.)

\* **Gameplay Abilities Game Features Action**: This plugin integrates Gameplay Abilities with the Game Features and Modular Gameplay system, enabling abilities to be packaged and activated as standalone features within a project. (Epic Games Developers documentation states: "The Game Features and Modular Gameplay plugins help developers create standalone features for their projects.")

\* **GameplayInteractions**: While not explicitly detailed as a built-in plugin in documentation, its likely relation to GAS suggests it facilitates interactions between characters and the environment or other entities, often tied into the ability system.

\* **GAS Companion** (Paid, 3rd party from [Fab.com](http://Fab.com)): This is a paid third-party plugin available on [Fab.com](http://Fab.com) that extends and simplifies the use of the native Unreal Engine Gameplay Ability System. ([Fab.com](http://Fab.com) search results show "GAS Companion. 4.9. (75) mklabs. From. $24.99. Tools & Plugins.")

**Additional Plugins:**

\* **Motion Design**: This plugin is geared towards creating motion graphics and animations directly within Unreal Engine, useful for UI animations, cinematics, and dynamic visual effects. (Epic Games Developers documentation mentions: "Motion Design \\- Create your motion graphics / animations.")

\* **Actor Palette**: A utility plugin that likely enhances the workflow for placing and managing actors within the Unreal Engine editor, providing a more organized and efficient way to populate levels.

\* **Buoyancy**: This plugin provides functionality for simulating buoyancy, allowing objects to float and interact realistically with water. (Epic Games Developers documentation mentions: "Water \\- Create Water Elements (River, etc.) & Buoyancy.")

\* **Water**: A built-in plugin that provides tools for creating realistic water bodies, including rivers, lakes, and oceans, with customizable properties. (Epic Games Developers documentation mentions: "Water \\- Create Water Elements (River, etc.) & Buoyancy.")

\* **Water Extras**: Likely an extension to the Water plugin, offering additional features or tools for enhancing water rendering and interaction.

\* **WaterAdvanced**: Another extension for the Water plugin, suggesting advanced functionalities for water simulation and visuals.

\* **PCG** (Procedural Content Generation): A powerful built-in tool for procedurally generating large-scale environments, assets, and levels, significantly speeding up development time. (Epic Games Developers documentation mentions: "Procedural Content Generation (PCG) \\- Create your Level with Procedural Generation Tool.")

\* **Threepeat Anim Tools** (Free, 3rd party from [Fab.com](http://Fab.com)): A free third-party animation tool available on [Fab.com](http://Fab.com) that provides additional utilities for animation workflows.

\* **Async Loading** (Free, 3rd party from [Fab.com](http://Fab.com)): A free third-party plugin from [Fab.com](http://Fab.com) that optimizes asset loading by allowing for asynchronous loading, which can improve performance and reduce hitches during gameplay.