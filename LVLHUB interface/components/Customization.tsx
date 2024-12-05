import React from 'react';
import { useCustomization } from '../contexts/CustomizationContext';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Customization() {
  const {
    companyName, setCompanyName,
    tagline, setTagline,
    industry, setIndustry,
    primaryColor, setPrimaryColor,
    secondaryColor, setSecondaryColor,
    textColor, setTextColor,
    missionStatement, setMissionStatement,
    location, setLocation,
  } = useCustomization();

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Business Identity Customization</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter your company name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="logo">Company Logo</Label>
          <Input
            id="logo"
            type="file"
            onChange={handleLogoUpload}
            accept="image/*"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tagline">Tagline or Slogan</Label>
          <Input
            id="tagline"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            placeholder="Enter your company tagline"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="industry">Industry or Sector</Label>
          <Input
            id="industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            placeholder="Enter your industry"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="primaryColor">Primary Color</Label>
          <Input
            id="primaryColor"
            type="color"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="secondaryColor">Secondary Color</Label>
          <Input
            id="secondaryColor"
            type="color"
            value={secondaryColor}
            onChange={(e) => setSecondaryColor(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="textColor">Text Color</Label>
          <Input
            id="textColor"
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="missionStatement">Mission Statement</Label>
          <Textarea
            id="missionStatement"
            value={missionStatement}
            onChange={(e) => setMissionStatement(e.target.value)}
            placeholder="Enter your company's mission statement"
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Primary Business Location</Label>
          <Input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your primary business location"
          />
        </div>

        <Button className="w-full">Save Changes</Button>
      </CardContent>
    </Card>
  );
}

