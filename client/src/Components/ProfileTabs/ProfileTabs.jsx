import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ListFilter, Search, LayoutGrid, Grid3x3, List } from "lucide-react";
import { Input } from "../ui/input";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Filters from "@/Components/Filters/Filters";

const ProfileTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeView, setActiveView] = useState("layoutGrid");
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleTab = (index) => {
    setActiveTab(tabs[index]);
  };

  const handleView = (view) => {
    setActiveView(view);
  };

  const toggleFilters = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="relative min-h-screen">
      {/* Tabs Navigation */}
      <Tabs defaultValue={tabs[0]?.value || ""} className="w-full px-7">
        <TabsList className="flex flex-row justify-start bg-none overflow-y-hidden bg-white border-b-2 focus:shadow-none focus:ring-0 h-fit">
          {tabs.map((tab, index) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={`text-xl px-8 border-b-2 font-sans font-semibold ${
                activeTab.value === tab.value
                  ? "!bg-primary text-white rounded-xl transition-all"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => handleTab(index)}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="flex flex-row justify-between my-6">
          {/* Filter and Search Section */}
          <div className="flex flex-row justify-center items-center gap-6">
            {/* Filter Button */}
            <div
              className={`flex flex-row justify-between items-center !bg-[#f7f7ff] rounded-xl py-2 px-3 cursor-pointer w-32 ${isFilterVisible ? "!bg-primary text-white" : ""}`}
              onClick={toggleFilters}
            >
              <ListFilter />
              <p className="">Filter</p>
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-1 w-full max-w-lg py-0 px-10 !bg-[#f7f7ff] rounded-full shadow-sm">
              <span className="text-gray-500">
                <Search className="w-5 h-5" />
              </span>
              <Input
                type="text"
                placeholder="Search by name"
                className="flex-grow !bg-[#f7f7ff] text-gray-600 outline-0 !border-0 "
              />
            </div>
          </div>

          {/* View & Sorting Section */}
          <div className="flex flex-row justify-center items-center gap-6">
            {/* Sorting */}
            <Select className="outline-none border-0">
              <SelectTrigger className="w-[200px] bg-[#f7f7ff] border-0 font-bold rounded-xl ">
                <SelectValue placeholder="Recently received" />
              </SelectTrigger>
              <SelectContent className="bg-[#f7f7ff] font-bold">
                <SelectItem value="recentlyreceived">
                  Recently received
                </SelectItem>
                <SelectItem value="hightolow">Price high to low</SelectItem>
                <SelectItem value="lowtohigh">Price low to high</SelectItem>
                <SelectItem value="highestfloor">Highest floor</SelectItem>
                <SelectItem value="bestoffer">Best offer</SelectItem>
                <SelectItem value="recentlycreated">
                  Recently created
                </SelectItem>
                <SelectItem value="highestlastsale">
                  Highest last sale
                </SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectContent>
            </Select>

            {/* Different Views */}
            <div className="flex flex-row gap-1">
              <LayoutGrid
                size={30}
                className={`cursor-pointer ${
                  activeView === "layoutGrid"
                    ? "bg-primary text-white p-1 rounded-md"
                    : ""
                }`}
                onClick={() => handleView("layoutGrid")}
              />

              <Grid3x3
                size={30}
                className={`cursor-pointer ${
                  activeView === "grid3x3"
                    ? "bg-primary text-white p-1 rounded-md"
                    : ""
                }`}
                onClick={() => handleView("grid3x3")}
              />

              <List
                size={30}
                className={`cursor-pointer ${
                  activeView === "list"
                    ? "bg-primary text-white p-1 rounded-md"
                    : ""
                }`}
                onClick={() => handleView("list")}
              />
            </div>
          </div>
        </div>

        {/* Filters + Tab Content */}
        <div className="flex flex-row gap-4">
          {/* Filters Section */}
          {isFilterVisible && (
            <div className="w-[20%]  p-0 rounded-lg ">
              <Filters />
            </div>
          )}

          {/* Tab Content */}
          <div
            className={`flex-grow ${
              isFilterVisible ? "w-[80%]" : "w-full"
            } transition-all duration-300`}
          >
            {tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                {tab.content}
              </TabsContent>
            ))}
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default ProfileTabs;
