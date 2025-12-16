import React, { useEffect, useState, useRef } from "react";
import { Search, X } from "lucide-react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

export default function SearchBar({
	value: controlledValue,
	onChange,
	onSearch,
	placeholder = "Search...",
	debounceMs = 300,
	className,
}) {
	const [value, setValue] = useState(controlledValue ?? "");
	const [isSearching, setIsSearching] = useState(false);
	const mounted = useRef(false);
	const debounceRef = useRef(null);

	useEffect(() => {
		if (typeof controlledValue !== "undefined") setValue(controlledValue);
	}, [controlledValue]);

	useEffect(() => {
		if (!onSearch) return;
		if (!mounted.current) {
			mounted.current = true;
			return;
		}

		setIsSearching(true);
		if (debounceRef.current) clearTimeout(debounceRef.current);
		debounceRef.current = setTimeout(() => {
			onSearch(value);
			setIsSearching(false);
		}, debounceMs);

		return () => {
			if (debounceRef.current) clearTimeout(debounceRef.current);
		};
	}, [value, onSearch, debounceMs]);

	const handleInput = (e) => {
		const v = e.target.value;
		if (typeof controlledValue === "undefined") setValue(v);
		onChange?.(v);
	};

	const handleClear = () => {
		if (typeof controlledValue === "undefined") setValue("");
		onChange?.("");
		onSearch?.("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (debounceRef.current) clearTimeout(debounceRef.current);
		setIsSearching(true);
		Promise.resolve(onSearch?.(value)).finally(() => setIsSearching(false));
	};

	return (
		<form
			role="search"
			aria-label="Search"
			onSubmit={handleSubmit}
			className={cn("w-full", className)}
		>
			<div className="relative">
				<span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
					<Search className="h-4 w-4" />
				</span>

				<Input
					value={value}
					onChange={handleInput}
					placeholder={placeholder}
					className="pl-10 pr-10"
					aria-label={placeholder}
				/>

				{value && (
					<button
						type="button"
						onClick={handleClear}
						aria-label="Clear search"
						className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground hover:bg-accent/50 md:hidden"
					>
						<X className="h-4 w-4" />
					</button>
				)}
			</div>
		</form>
	);
}

export { SearchBar };
