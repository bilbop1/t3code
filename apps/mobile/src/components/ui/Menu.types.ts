import type { MenuAction, MenuView } from "@react-native-menu/menu";
import type { ComponentProps, ReactNode } from "react";
import type { AccessibilityProps } from "react-native";

export type MenuProps = Omit<ComponentProps<typeof MenuView>, "children" | "themeVariant"> &
  Pick<AccessibilityProps, "accessible" | "accessibilityLabel" | "accessibilityRole"> & {
    readonly children: ReactNode;
    readonly className?: string;
  };

/**
 * Android popup only: draws a custom leading element, such as a project's icon, at the given size.
 * It takes the place of the action's `image` symbol.
 */
export type MenuActionWithLeading = MenuAction & {
  readonly renderLeading?: (size: number) => ReactNode;
};
